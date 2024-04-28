import React, { useContext, useState } from 'react';
import './Search.css';
import { Dropdown } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index.js';

const Search = observer(() => {
    const { state } = useContext(Context)
    const [index, setIndex] = useState(0)
    const frameworks = [
        {
            "id": 1,
            "name": "Django",
            "description": "Django is a high-level Python web framework that facilitates rapid development of web applications by providing a clean and pragmatic design. It follows the Model-View-Controller (MVC) architectural pattern, but with slight differences, often referred to as MTV (Model-Template-View). This framework emphasizes the principle of DRY (Don't Repeat Yourself) and encourages the reusability of components, promoting efficient and maintainable code.\r\n\r\nAt its core, Django includes a set of built-in features that streamline the development process. These features include an Object-Relational Mapping (ORM) system that abstracts database access, allowing developers to interact with databases using Python objects instead of SQL queries directly. This ORM simplifies database management and makes it easier to switch between different database engines.\r\n\r\nAdditionally, Django provides a powerful URL routing system that maps URLs to Python functions called views, enabling developers to create clean and organized URL structures for their applications. The built-in template engine allows developers to separate the presentation layer from the business logic, facilitating the creation of dynamic and responsive web pages.\r\n\r\nDjango also includes built-in security features such as protection against common web vulnerabilities like CSRF (Cross-Site Request Forgery) and XSS (Cross-Site Scripting). It provides authentication and authorization mechanisms out of the box, making it easy to implement user authentication and permissions in web applications.\r\n\r\nMoreover, Django's admin interface automatically generates a user-friendly administrative interface for managing site content, which can be customized to suit specific application requirements.\r\n\r\nFurthermore, Django follows the \"batteries-included\" philosophy, offering a rich ecosystem of third-party libraries and extensions that further extend its functionality, allowing developers to easily integrate additional features into their applications.\r\n\r\nOverall, Django is a robust and versatile framework that empowers developers to build scalable and secure web applications efficiently. Its comprehensive set of features, coupled with its active community and extensive documentation, make it a popular choice for web development projects of all sizes."
        },
        {
            "id": 2,
            "name": "Tkinter",
            "description": "Tkinter is a standard Python library used for creating graphical user interfaces (GUIs). It serves as a wrapper for the Tk GUI toolkit, originally developed for the Tcl programming language. Tkinter provides a simple and intuitive way to design and develop desktop applications with graphical interfaces, making it suitable for both beginner and experienced Python developers.\r\n\r\nOne of the key features of Tkinter is its ease of use. With Tkinter, developers can quickly create GUI applications by building a hierarchy of widgets, such as buttons, labels, text boxes, and frames. These widgets can be arranged and customized to create visually appealing interfaces that meet the specific requirements of the application.\r\n\r\nTkinter follows the event-driven programming paradigm, where actions such as button clicks or keyboard inputs trigger events that are handled by event handlers or callback functions. This allows developers to define the behavior of their applications in response to user interactions, making GUI development more interactive and dynamic.\r\n\r\nFurthermore, Tkinter provides cross-platform compatibility, allowing GUI applications built with Tkinter to run seamlessly on different operating systems, including Windows, macOS, and Linux. This ensures that developers can create applications that reach a wider audience without the need for platform-specific modifications.\r\n\r\nIn addition to its core functionality, Tkinter offers support for various layout managers, which help in organizing and positioning widgets within the application's window. Layout managers such as grid, pack, and place enable developers to create flexible and responsive user interfaces that adapt to different screen sizes and resolutions.\r\n\r\nMoreover, Tkinter provides access to a rich set of built-in widgets and tools for handling common GUI tasks, such as file dialogs, message boxes, and menus. These built-in components help streamline the development process and reduce the need for external dependencies.\r\n\r\nOverall, Tkinter is a versatile and beginner-friendly library for creating GUI applications in Python. Its simplicity, cross-platform compatibility, and extensive documentation make it a popular choice for developing desktop applications with graphical interfaces."
        }
    ]

    const toDjango = () => {
        setIndex(0)
    }

    const toTkinter = () => {
        setIndex(1)
    }

    const submitAnswer = () => {
        state.setFramework(frameworks[index])
    }
    console.log(state.framework);
    return (
        <div className='searchContainer'>
            <form action="" className="search">
                <div className='search-inner-container'>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Choose your framework
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={toDjango}>Django</Dropdown.Item>
                            <Dropdown.Item onClick={toTkinter}>Tkinter</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <input type="submit" value="Research" onClick={submitAnswer} className='research-btn' />
                </div>
            </form>
        </div>
    );
});

export default Search;
