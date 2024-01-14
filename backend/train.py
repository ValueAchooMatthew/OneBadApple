from tensorflow import keras
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import tensorflow as tf


base_model = keras.applications.VGG16(
    weights='imagenet',
    input_shape=(224, 224, 3),
    include_top=False)

num_classes = 6
# Create inputs with correct shape
inputs = keras.Input(shape=(224, 224, 3))

x = base_model(inputs, training=False)

# Add pooling layer or flatten layer
x = keras.layers.GlobalAveragePooling2D()(x)

# Add final dense layer
outputs = keras.layers.Dense(num_classes, activation='softmax')(x)

# Combine inputs and outputs to create model
model = keras.Model(inputs, outputs)

model.summary()

base_model.trainable = True
model.compile(optimizer=keras.optimizers.RMSprop(learning_rate=0.00001),
                loss='categorical_crossentropy', metrics=['accuracy'])

datagen_train = ImageDataGenerator(
    samplewise_center=True,
    rotation_range=15,
    zoom_range=0.1,
    width_shift_range=0.1,
    height_shift_range=0.1,
    horizontal_flip=True,
)

datagen_valid = ImageDataGenerator(
    samplewise_center=True,
    rotation_range=15,
    zoom_range=0.1,
    width_shift_range=0.1,
    height_shift_range=0.1,
    horizontal_flip=True,
    vertical_flip=False,
)

train_path = './backend/dataset-download/images/dataset/dataset/test'
valid_path = './backend/dataset-download/images/dataset/dataset/train'

# load and iterate training dataset
train_it = datagen_train.flow_from_directory(
    train_path,
    target_size=(224, 224),
    color_mode="rgb",
    class_mode="categorical",
)
# load and iterate validation dataset
valid_it = datagen_valid.flow_from_directory(
    valid_path,
    target_size=(224, 224),
    color_mode="rgb",
    class_mode="categorical",
)



model.fit(train_it,
            validation_data=valid_it,
            steps_per_epoch=len(train_it),
            validation_steps=len(valid_it),
            epochs=2)

print("done train")
model.save("bad_apple1.keras")
print("done save")
