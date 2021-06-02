import io
import json
import torch
import timm
from timm.data import resolve_data_config
from timm.data.transforms_factory import create_transform
from PIL import Image

class_index = json.load(open('class_index.json'))

model = timm.create_model('resnet18', pretrained=True, num_classes=2)
model.load_state_dict(torch.load('./first_model_cat_dog.pt', map_location='cpu'))
config = resolve_data_config({}, model=model)
transform = create_transform(**config)
model.eval()


def get_prediction(image_bytes):
    image = Image.open(io.BytesIO(image_bytes))
    tensor = transform(image).unsqueeze(0)
    # tensor = transform_image(image_bytes=image_bytes)
    outputs = model.forward(tensor)
    _, y_hat = outputs.max(1)
    predicted_idx = str(y_hat.item())
    print(predicted_idx)
    return class_index[predicted_idx]