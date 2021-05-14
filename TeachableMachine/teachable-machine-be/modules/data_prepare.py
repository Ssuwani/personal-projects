import os
from google_images_download import google_images_download
from PIL import Image
response = google_images_download.googleimagesdownload()


def webp_to_jpg_and_rename(keyword, folder):
    image_folder = os.path.join(folder, keyword)
    for i, image in enumerate(os.listdir(image_folder)):
        image_path = os.path.join(image_folder, image)
        if image.split(".")[-1] == 'webp':
            img = Image.open(image_path).convert("RGB")
            img.save(f"{image_folder}/{i}.jpg")
            os.remove(image_path)
        else:
            os.rename(image_path, f"{image_folder}/{i}.jpg")


def download(keyword, count, folder):
    arguments = {"keywords": keyword,
                 "limit": count,
                 "print_urls": True,
                 "output_directory": folder,
                 "format": "jpg"}
    response.download(arguments)
    webp_to_jpg_and_rename(keyword, folder)


if __name__ == "__main__":
    download("dog", 10, "../data/init/")
    # download("cat", 10, "../data/init/")
