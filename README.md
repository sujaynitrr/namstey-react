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