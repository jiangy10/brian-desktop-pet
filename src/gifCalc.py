from PIL import Image

def get_gif_duration(gif_path):
    with Image.open(gif_path) as img:
        duration = 0
        for frame in range(img.n_frames):
            img.seek(frame)
            duration += img.info['duration']
        return duration

gif_path = './images/stand/stand_left.gif'
duration = get_gif_duration(gif_path)
print(f'Duration: {duration} milliseconds')
