<div align='center'>

# Human to ActiveRecord

Live on 
<a href="https://humantoactiverecord-production.up.railway.app/" target="_blank">Railway</a>

![](https://github.com/nedzib/human_to_activerecord/blob/main/app_example.gif)

</div>

This Rails 7 application demonstrates the use of ChatGPT API to translate human natural language queries into ActiveRecord queries. It is a database-less application using <a href="https://stimulusreflex.com/" target="_blank">Stimulus Reflex</a> and <a href="https://cableready.stimulusreflex.com/" target="_blank">Cable Ready</a> to provide real-time updates.

The app was inspired by <a href="https://www.sqltranslate.app/" target="_blank">SQLTranslate</a>, which provided the initial idea and inspiration for creating a similar tool that translates natural language queries into ActiveRecord queries.

## Features

- Translates natural language queries to ActiveRecord queries.
- Real-time updates using Stimulus Reflex and Cable Ready.
- Minimalistic and database-less architecture.

## Requirements

- Ruby (version 3.1.2)
- Ruby on Rails (version 7.0.7)

## Installation

1. Clone this repository:

```shell
git clone https://github.com/nedzib/human_to_activerecord
cd human_to_activerecord
```
2. Install gem dependencies:

```shell
bundle install
```
3. Setup your chatGPT API key:
   - Create a .env file in the project root.
   - Add your ChatGPT API credentials to the .env file:
```shell
CHATGPT_API_KEY=your_api_key_here
```
4. Start the Rails server:

```shell
rails server
```
5. Visit the app at http://localhost:3000
6. Enjoy!


## Contributing
Contributions are welcome! Feel free to open issues or pull requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- <a href="https://chat.openai.com/" target="_blank">ChatGPT API</a>
- <a href="https://stimulusreflex.com/" target="_blank">Stimulus Reflex</a>
- <a href="https://cableready.stimulusreflex.com/" target="_blank">Cable Ready</a>
- This app was inspired by <a href="https://www.sqltranslate.app/" target="_blank">SQLTranslate</a>.
- <a href="https://github.com/nedzib/human_to_activerecord" target="_blank">https://github.com/nedzib/human_to_activerecord</a>
