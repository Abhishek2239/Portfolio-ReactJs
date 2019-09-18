import React from 'react';
import PortfolioItem from './portfolioItem/portfolioItem'
import './portfolio.css';
import '../../css/utilities.css'

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
            tech: 'Reactjs , Python ( Selenium,Bs4 ) ,   Css',
            githublink: 'https://github.com/Abhishek2239/Pokedex-ReactJs',
            visitlink: 'https://pokedex.abhishekcodes.in/',
            imageSrc: "images/pokedex.png"
        },
        {
            title: 'ToDo-List',
            description: `A simple react js app to manage a list of tasks, tasks can be deleted or updated with their respective
            buttons. A Modal appears on editing the task. This app used react hooks to manage the data of the list`,
            tech: 'Reactjs , Css',
            githublink: 'https://github.com/Abhishek2239/ToDoList-ReactJs',
            visitlink: 'https://todo.abhishekcodes.in/',
            imageSrc: "images/todo.png"
        },
        {
            title: 'Portfolio',
            description: `The very own website which you are browsing right now is made using Reactjs. I wanted to make
            a reusable component for portfolio item so that I could add as many items as I wanted.For a fresh design I sticked
            to a white and a pink gradient combination`,
            tech: 'Reactjs , Css',
            githublink: 'https://github.com/Abhishek2239/Portfolio-ReactJs',
            visitlink: 'https://abhishekcodes.in/',
            imageSrc: "images/portfolio.png"
        },
       

        {
            title: 'BudgetApp',
            description: `A vanilla javascript app which uses IIFEs and some public functions associated with them.
            There are different controllers function which handles budget,ui,and other operationa of the app.
            I incorporated SASS to it , although its not a big application, I implemented 7-1 Architecture`,
            tech: 'VANILLA JAVASCRIPT - SASS',
            githublink: 'https://github.com/Abhishek2239/Budget-App-V1',
            visitlink: 'https://budget.abhishekcodes.in/',
            imageSrc: "images/budget.png"
        },
        {
            title: 'Budger-Builder',
            description: `This app incorporates all the main technologies associated with reactjs like react-router,
            react-redux.This project was a part of the course.It generates a burger on user input and after ordering,
            the order details are stored on the Firebase Database`,
            tech: 'Reactjs , React-Redux , React-Router , Firebase',
            githublink: 'https://github.com/Abhishek2239/BurgerBuilder-ReactJs',
            visitlink: 'https://burger.abhishekcodes.in/',
            imageSrc: "images/burger.png"
        },
        
    ]

    return (
        <><div className='portfolio-heading'>
        <h2 className='primary-heading'>Portfolio</h2>
        <h3 className='secondary-heading'>Check out what I have been coding recently</h3>
        </div>
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