function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement)

}

function customRender2(reactElement2, container){

    const domElement = document.createElement(reactElement2.type)
    domElement.innerHTML = reactElement2.children

    for(const prop in reactElement2.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement2.props[prop]);
    }
    container.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click here to go on google"
}


const reactElement2 = {
    type: 'a',
    props: {
        href: 'https://flipkart.com',
        target: '_blank'
    },
    children: "Click here to go on flipkart"
}

const mainContainer = document.querySelector('#root')
const mainContainer2 = document.querySelector('#root')

customRender(reactElement, mainContainer)
customRender2(reactElement2, mainContainer2)