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

shutil.make_archive('release', 'zip', 'target')
