import shutil, os

if os.path.exists('target'):
    shutil.rmtree('target')

shutil.copytree("extension/", "target/")

with open('src/template.txt', 'r') as template_file:
    template = template_file.read()

    ui_file = open('src/ui.js', 'r')
    ui = ui_file.read()

    lobby_file = open('src/lobby.js', 'r')
    lobby = lobby_file.read()

    socketio_file = open('src/socket.io-1.4.5.min.js', 'r')
    socketio = socketio_file.read()

    output = template.replace('%LOBBY.JS%', lobby)\
                    .replace('%UI.JS%', ui)\
                    .replace('%SOCKET.IO%', socketio)
    output_file = open("target/make_hanabi_great_again.user.js", "w")
    output_file.write(output)
    output_file.close()


shutil.copyfile("src/hanabi.css", "target/hanabi.css")


#make the zip file to be uploaded to google web store
shutil.make_archive('release', 'zip', 'target')
