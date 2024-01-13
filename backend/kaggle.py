import subprocess
import os
import zipfile

# Set Kaggle API key using environment variable
os.environ['KAGGLE_USERNAME'] = 'youkaiwen'
os.environ['KAGGLE_KEY'] = '94324187978948b5daf8be4d710dc45b'

"""
specify the dataset you want to download
get the copy API command from kaggle 
"""

# change the dataset name based on the dataset you want to download
dataset_name = 'sriramr/fruits-fresh-and-rotten-for-classification'

command = f'kaggle datasets download -d {dataset_name} -p dataset-download/images'

# run the kaggle command to download the file
subprocess.run(command, shell=True)

# unzip the downloaded file
zip_file_path = os.path.join('dataset-download', 'images', f'{dataset_name.split("/")[1]}.zip')
output_dir = os.path.join('dataset-download', 'images')

with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
    zip_ref.extractall(output_dir)

# remove the old zip file
os.remove(zip_file_path)
