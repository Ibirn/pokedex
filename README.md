# Pokedex App

This is a simple and fun mini-project to connect the PokeAPI to a single-page-application that allows users to get basic information about a given Pokemon.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.

## About the Project

This was built as part of an application for internship at BCCH.
This pokedex was built with an autocomplete feature - the first I've ever built, which provided an interesting challenge and was probably the most technically difficult part of the process. I struggled with getting the list to dynamically update with typing, and ended up relying on setStates that would update the query as well the list of suggestions.
It's also my first use of the Emotion styling library, which seems very powerful and I used it for three specific components that I wanted to adjust based on the specific pokemon being showed.
