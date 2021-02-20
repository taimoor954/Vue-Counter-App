new Vue({
    el : ".counter", 
    data : {
        counterValue : 0
    },
    methods : {
        addMe : function()
        {
            this.counterValue = this.counterValue+1
        },
        subMe : function()
        {
            this.counterValue = this.counterValue-1
        }
    }
})
