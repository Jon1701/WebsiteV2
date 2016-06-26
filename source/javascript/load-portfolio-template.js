$(document).ready(function() {

  // Components
  var component = {

    // Bootstrap
    bootstrap : {
      name: "Bootstrap",
      img: "../images/logos/Bootstrap/bootstrap-solid.png"
    },

    // jQuery
    jquery: {
      name: "jQuery",
      img: "../images/logos/jQuery/jQuery-Logo.png"
    },

    // Mustache.js
    mustache: {
      name: "mustache.js",
      img: null
    },

    // React
    react: {
      name: "React",
      img: "../images/logos/React/react-logo.png"
    },

    // Sass
    sass: {
      name: "Sass",
      img: "../images/logos/Sass/color-1c4aab2b.png"
    }

  }

  // Select the template.
  var template = $("#template-portfolio-project").html();

  // Portfolio Project Data.
  var data = {

    // List of projects.
    projects: [

      {
        image: "../images/portfolio/cover-quote-generator.png",
        title: "Life is Strange Quote Generator",
        description: "Relive the horror here with quotes from the game, also comes with a relaxing soundtrack",
        popover: {
          id: "popover-1"
        },
        components: [component.jquery, component.sass],
        link: {
          github: "https://github.com/Jon1701/LifeIsStrangeQuoteGenerator",
          demo: "../portfolio/LifeIsStrangeQuoteGenerator"
        }
      },

      {
        image: "../images/portfolio/cover-pumpkindoro-timer.png",
        title: "Pumpkindoro timer",
        description: "A variation of the world famous Pomodoro Timer, but made with real Pumpkins",
        popover: {
          id: "popover-5"
        },
        components: [component.jquery],
        link: {
          github: "https://github.com/Jon1701/PumpkindoroTimer",
          demo: "../portfolio/PumpkindoroTimer"
        }
      },

      {
        image: "../images/portfolio/cover-simongame.png",
        title: "Simon Game",
        description: "A classic, rebuilt for modern times, and in 4K",
        popover: {
          id: "popover-3"
        },
        components: [component.jquery, component.sass],
        link: {
          github: "https://github.com/Jon1701/SimonGame",
          demo: "../portfolio/SimonGame"
        }
      },

      {
        image: "../images/portfolio/cover-twitch-viewer.png",
        title: "TwitchViewer",
        description: "View which of my favourite streamers are online and what they are playing",
        popover: {
          id: "popover-2"
        },
        components: [component.jquery, component.react, component.sass],
        link: {
          github: "https://github.com/Jon1701/TwitchViewer",
          demo: "../portfolio/TwitchViewer"
        }
      },

      {
        image: "../images/portfolio/cover-wikiviewer.png",
        title: "Wiki Viewer",
        description: "Search for Wikipedia using Wikipedia",
        popover: {
          id: "popover-4"
        },
        components: [component.bootstrap, component.mustache, component.jquery],
        link: {
          github: "https://github.com/Jon1701/WikiViewer",
          demo: "../portfolio/WikiViewer"
        }
      }

    ]// End list.
  } // End data

  // Parse template.
  Mustache.parse(template);

  // Render template.
  var rendered = Mustache.render(template, data);

  // Attach template.
  $("#portfolio-target").html(rendered);

});
