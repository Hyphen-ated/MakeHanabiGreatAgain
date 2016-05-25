import shutil, os

if os.path.exists('target'):
    shutil.rmtree('target')

shutil.copytree("extension/", "target/")

with open('extension/template.txt', 'r') as template_file:
    template = template_file.read()
    with open('src/ui.js', 'r') as ui_file:
        ui = ui_file.read()
        with open('src/lobby.js') as lobby_file:
            lobby = lobby_file.read()
            output = template.replace('%LOBBY.JS%', lobby)\
                            .replace('%UI.JS%', ui)
            output_file = open("target/make_hanabi_great_again.user.js", "w")
            output_file.write(output)
            output_file.close()



shutil.copyfile("src/ui.js", "target/ui.js")
shutil.copyfile("src/lobby.js", "target/lobby.js")

#if you aren't me, just take this key stuff out.
key_directory = "D:/home/code/hanabipem/"
shutil.copyfile(key_directory + "key.pem", "target/key.pem")

#make the zip file to be uploaded to google web store
shutil.make_archive('release', 'zip', 'target')

#don't accidentally leave key information anywhere inside this repo working dir
shutil.move('release.zip', key_directory + 'release.zip')
os.remove('target/key.pem')