from PIL import Image, ImageOps


def resizeImage(image_path: str, final_size: [int, int]):
    img = Image.open(image_path)
    # Assuming desired size is smaller than input image
    resized_image = img.resize(final_size)
    return resized_image

def padImage(image_path: str, final_size: [int, int]):
    img = Image.open(image_path)
    # Assuming desired size is greater than input image
    width, height = img.size
    padding_x = final_size[1] - height
    padding_y = final_size[0] - width
    padded_image = Image.new(img.mode, (width + padding_x, height + padding_y), (255, 255, 255))
    padded_image.paste(img, (padding_x//2, padding_y//2))
    return padded_image

# resizeImage("./backend/1673569337116.jpg", [100, 200]).show()
padImage("./backend/1673569337116.jpg", [800, 800]).show()
