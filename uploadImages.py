import os
import shutil
import platform

def copy_all(src, dst):
    if not os.path.exists(src):
        raise ValueError(f"Source path '{src}' does not exist.")

    if not os.path.isdir(src):
        raise ValueError(f"Source path '{src}' is not a directory.")

    # Ensure the destination directory exists
    os.makedirs(dst, exist_ok=True)

    # Iterate over items in the source directory
    for item in os.listdir(src):
        src_item = os.path.join(src, item)
        dst_item = os.path.join(dst, item)
        shutil.copytree(src_item, dst_item, dirs_exist_ok=True)

current_os = platform.system()
if current_os == "Windows":
    source_path = "C:/Program Files (x86)/Steam/userdata/166532502/760/remote"
    destination_path = "public/archive/steam_screenshots"

# try:
#     copy_all(source_path, destination_path)
#     print(f"All files and directories copied from '{source_path}' to '{destination_path}'.")
# except ValueError as e:
#     print(e)
# except Exception as e:
#     print(f"An error occurred: {e}")
