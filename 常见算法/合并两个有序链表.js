// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

const a1 = {
    value:1,
    next:{
      value:2,
      next:null
    }
  }
  
  const a2 = {
    value:3,
    next:{
      value:4,
      next:null
    }
  }

  function mergeTwoList(l1,l2){
    if(l1 ===null){
      return l2
    }else if(l2 === null){
      return l1
    }else if(l1.value < l2.value){
      l1.next = mergeTwoList(l1.next,l2)
      return l1
    }else{
      l2.next = mergeTwoList(l1,l2.next)
      return l2
    }
  }

  const r = mergeTwoList(a1,a2)
  console.log("%c Line:31 🍢 r", "color:#ffdd4d", r);

