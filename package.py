version = "0.1"

with open('template.txt', 'r') as template_file:
    template = template_file.read()
    with open('ui.js', 'r') as ui_file:
        ui = ui_file.read()
        with open('lobby.js') as lobby_file:
            lobby = lobby_file.read()
            output = template.replace('%LOBBY.JS%', lobby)\
                            .replace('%UI.JS%', ui)\
                            .replace('%VERSION%', version)
            output_file = open("target/make_hanabi_great_again-" + version + ".user.js", "w")
            output_file.write(output)
            output_file.close()
