import React from 'react';
import '../App.css';

function Projects () {

    return (
        <div className='content-container'>
            <h1>Projects</h1>
            
            <h2>
                Researching How To Place A High-Resolution Image In The Human Visual Field
            </h2>
            <p>
                Currently, am working with an advisor on a literature review on how the human
                visual field processes and perceives light and images and how electrical stimulation 
                can be induced in the brain to produce a high-resolution phosphene image
                in the visual field. Instead of a some object reflecting light into the eye and the
                brain perceives the object the brain will respond to the stimulation with the
                perception of some object without the object being seen. Research is being done 
                with Dr. Mugizi Rwebangira.
            </p>

            <h2>
                Mapping Debate Using Biderectional Encoded Representations Transformer &#40;BERT&#41; Model
            </h2>
            <p>
                After constructing a data set of 2579 tagged sentences &#40;with the assistance of
                GPT-3&#41;, the BERT model was implemented trained and interfaced with using
                Python to achieve a 64% accuracy score on a binary classification task using a
                80/20 training-validation split. Currently, testing is being performed to increase
                accuracy with tuning hyperparameters.
            </p>
            <p>
                The next goal is to perform a relationship, semantic, and multiclass classification
                to produce a web map of a transcribed debate identifying statements such as
                the topic, position, main points, evidence, logical fallacies, counter arguments,
                and tangents as well as evaluate tone, humor, and accuracy in the debates.
                Research is being done with Dr. Lubomir Stanchev.
            </p>

            <h2>
                Perspektiv - Collaborative Social Media Platform
            </h2>
            <p>
                Led as the scrum master of a team of 3 people, using the Agile software development 
                process within a software development class. The team was designing
                the user-interface in Figma, created a use-case diagram to display the features
                and how the user interacts with them, and a class diagram to describe what
                data belongs to which objects in the application and their relationship to each
                other. Our team created a minimum viable product in just over 6 weeks using
                3 sprints.
            </p>
            <p>
            <a href='https://github.com/EthanRWagner/Perspektiv'
                        target='_blank' rel='noreferrer noopener'>Perspektiv Repository</a>
            </p>

            <h2>
                Brain Damnage - Non-Fungible Token Generation Project 
            </h2>
            <p>
                As an independent project, the brand ”Brain Damnage” which features bit art
                images with 12 layers to be customized with 16 color options can generate 1820
                unique images and the number of samples to be generated can be manipulated.
                This project was not published on any block chain or promoted as an official
                NFT project but was an opportunity to sharpen Python skills and working with
                image files. Further development needs to be done to expand the options of the layers.
                For example, I want to create multiple designs for accessories, brain shape, top apparel,
                and bottom apparel.
            </p>
            <p>
            <a href='https://github.com/EthanRWagner/Brain-Damnage-NFT'
                        target='_blank' rel='noreferrer noopener'>Brain Damnage Repository</a>
            </p>
            
            <h2>
                This Personal Website
            </h2>
            <p>
                I am treating this website as an extended resume, way to express some of the projects and other
                events I am doing, ways to capture my thoughts, and a place to write about things I have learned about.
                I had great pleasure in creating Perspektiv and wanted to make a website on my own. I hope that this project
                can act more as a platform rather than a static lump of words. My goal is to have my minimum design finished
                by the end of 2022 and of course continue to expand on it in the coming years.
            </p>
        </div>
    );
}

export default Projects;