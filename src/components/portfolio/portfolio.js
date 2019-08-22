import React from 'react';
import PortfolioItem from './portfolioItem/portfolioItem'


const Portfolio = () => {

    //array item's object format
    // {title: '',
    //  description: ``,
    //  tech: '',
    //  githublink: '',
    //  visitlink: '',
    //  imageSrc: ""}

    //add portfolio items here
    const arr = [
        
        {
            title: 'Pokedex',
            description: `I first scraped the required data of pokemons from 
            Pokemon.com using python(bs4 and selenium) and saved it in a csv 
            file.Then with (papa parser) I parsed that data to create Pokecard Components
            for 809 pokemons.You can search pokemons by generations , name, type.
            On clicking the card pokemon's sound is played`,
            tech: 'Reactjs - Python ( Selenium,Bs4 ) - Css',
            githublink: 'https://github.com/Abhishek2239/Pokedex-ReactJs',
            visitlink: 'https://pokedex.abhishekcodes.in/',
            imageSrc: "images/pokedex.png"
        },
        {
            title: 'Portfolio',
            description: `I first scraped the required data of pokemons from 
            Pokemon.com using python(bs4 and selenium) and saved it in a csv 
            file.Then with (papa parser) I parsed that data to create Pokecard Components
            for 809 pokemons.You can search pokemons by generations , name, type.
            On clicking the card pokemon's sound is played`,
            tech: 'Reactjs - Css',
            githublink: 'https://github.com/Abhishek2239/Portfolio-ReactJs',
            visitlink: 'https://abhishekcodes.in/',
            imageSrc: "images/fidalgo.png"
        },
        {
            title: 'ToDo-List',
            description: `I first scraped the required data of pokemons from 
            Pokemon.com using python(bs4 and selenium) and saved it in a csv 
            file.Then with (papa parser) I parsed that data to create Pokecard Components
            for 809 pokemons.You can search pokemons by generations , name, type.
            On clicking the card pokemon's sound is played`,
            tech: 'Reactjs - Bootstrap',
            githublink: 'https://github.com/Abhishek2239/ToDoList-ReactJs',
            visitlink: 'https://todo.abhishekcodes.in/',
            imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
        },

        {
            title: 'BudgetApp',
            description: `I first scraped the required data of pokemons from 
            Pokemon.com using python(bs4 and selenium) and saved it in a csv 
            file.Then with (papa parser) I parsed that data to create Pokecard Components
            for 809 pokemons.You can search pokemons by generations , name, type.
            On clicking the card pokemon's sound is played`,
            tech: 'VANILLA JAVASCRIPT - SASS',
            githublink: 'https://github.com/Abhishek2239/Budget-App-V1',
            visitlink: 'https://budget.abhishekcodes.in/',
            imageSrc: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
        },
        
    ]

    return (
        <>
            {arr.map(item => {
                return (
                    <PortfolioItem
                        key={Math.random()}
                        title={item.title}
                        description={item.description}
                        tech={item.tech}
                        githublink={item.githublink}
                        visitlink={item.visitlink}
                        imageSrc={item.imageSrc} />
                )
            })}
        </>
    )
}

export default Portfolio;