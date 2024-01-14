from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this import

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    image = request.files['image']
    # Process the image as needed, for example, save it to a directory
    image.save('uploaded_image.jpg')

    return jsonify({'message': 'Image uploaded successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)