import os
import zipfile
    
def zipdir(path, ziph):
    # ziph is zipfile handle
    for root, dirs, files in os.walk(path):
        for file in files:
            ziph.write(os.path.join(root, file), 
                       os.path.relpath(os.path.join(root, file), 
                                       os.path.join(path, '..')))

def makezip(react_dir):      
    zipf = zipfile.ZipFile('react_classifier.zip', 'w', zipfile.ZIP_DEFLATED)
    zipdir(react_dir, zipf)
    zipf.close()