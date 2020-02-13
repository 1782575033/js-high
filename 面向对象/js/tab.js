var that=''
class Tab {
    
    constructor(id){
        that = this
        // 获取到tab区域
        this.main = document.querySelector(id)
        // 获取所有的li
        this.lis = this.main.querySelectorAll('.fisrstnav li')
        // 获取所有的section
        this.sections = this.main.querySelectorAll('.tabscon section')
        // 获取add
        this.add = this.main.querySelector('.tabadd')
        // 为每一个li添加index和点击事件
        for(var i = 0 ;i<this.lis.length;i++){
            this.lis[i].index = i;
            // console.log(this.lis[i].index)
            this.lis[i].onclick = this.toggleTab;
        }
        // 为添加按钮+绑定点击事件
        this.add.onclick = this.addTab;

        
        
    }
    // 切换功能
    toggleTab(){
        // console.log(this.index)
        // 删除所有li的class
        for(var i = 0 ; i< that.lis.length;i++){
            that.lis[i].className=''
            that.sections[i].className=''
        }
        // 为当前标题添加激活样式
        this.className = 'liactive'
        // 为当前的内容添加激活样式
        that.sections[this.index].className='conactive'
    }
    // 添加功能
    addTab(){

    }
    // 删除功能
    removeTab(){

    }
    // 修改功能
    editTab(){

    }

}
// 实例化tab
var tab = new Tab("#tab")
