from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

# Folder to save uploaded images
UPLOAD_FOLDER = '/backend/prediction-image'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    image = request.files['image']

    if image.filename == '':
        return jsonify({'error': 'No image selected'}), 400

    filename = secure_filename(image.filename)
    save_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)

    # Check if the upload folder exists, if not, create it
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])

    image.save(save_path)

    return jsonify({'message': 'Image uploaded successfully', 'filename': filename}), 200

if __name__ == '__main__':
    app.run(debug=True)
