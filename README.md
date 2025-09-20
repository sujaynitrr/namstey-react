# Namaste Reect

# How setState method works
# in class component state is big object which contains lot of things means related to all state information
# when we will try to update  state using setState() method, React will go to state object and search that particular state value then the update the particular value;

# this.state={
    count1:0
    count2 : 0
}

# this.setSate({
    count1:this.state.count+1
    count2:this.state.count+1
})

# we need to update same thing on particular event we can update together like above one

# in class component we don't update the state directly means like ==> this.state.count = this.state.count+1


# Life cycle method diagram follow this link ==>https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 

# React has two phase 1. Render phase and second one 2. commit phase

# React will create the bunch of render method of component 
# First call parent render method then call every child render method after that again start life cycle method bundle
# eg parent constructor and parent render method after first child constructor and render method then again call second child of constructor and render method after that componentDidMount() method call of first child after that second child and then parent




# concept of cleanup and without cleanup

# For cleanup we have to write like 
    useEffect(()=>{
        const timeIntervalId = setTimeOut(()=>{

        },1000) 

        return ()=>{
            clearTimeOut(timeIntervalId)
        }
    },[])

 # When don't cleanup it chance league the memory    



 # performance optimization
    //chucking
    //code splitting
    //Dynamic Bundling
    //lazy loading
    //on demand loading
    //dynamix import        

# Higher order component

For higher order component, it takes a component and enhance some features without changing original component and return new updated component

const Card=({res})=>{
    const name={res};
    return(
        <div>
            {name}
        </div>
        
    ) 
} 
export default Card  

export const Hoc=(Card)=>{
    return (props)=>{
        return(
            <div>
                <label>Promoted</label>
                <Card {...props}/>
            </div>
        )
    }
}


How to use HOC

<Hoc res={info}/>  


# Redux
# How to install redux in our application
# Follows the following steps
1. install the npm install @reduxjs/toolkit and react-redux
2. create store using createSliceStore
3. Provide the store at root label of application using <Provider store={enter name of store here}>
4. 



# Now time to test case

# In our application we do lots of testing but some testing done by react developer name of test is below
# unit testing
# Integration testing
# Ent to end testing

# But in react when we will create project using parcel not npx create command in this case we have install some library to write test case. List of library is below
# 1. React testing library for installation ==>npm install -D @testing-library/react (dev dependency)

# 2. After that we install jest library using command npm i -d jest
# why jest 
# Because in react testing library internally  using jest
# once install jest we have also install some dependency library  like babel
# 3. install babel using command ==> npm install --save-dev babel-jest @babel/core @babel/preset-env
# configure babel and parcel
# How to configure babel and parcel
# make folder at root level of the application
# .babel.config.js and .parcelrc
# for babel config follow jest doc file and for parcelrc follow parcel doc 
# module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};

#{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}

# run test case command ==> npm run test

# now time to initializing jest in our application using => npx jest --init
# During the initializations jest asks few questions 

# after that we have to install jsdom library using => npm install --save-dev jest-environment-jsdom

# Test file extension
# Headers.test.js
# Headers.test.ts
# Headers.spec.js
# Headers.spect.ts