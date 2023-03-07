var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode();
    let current1 = list1, current2 = list2, newCurrent = newList;
    if (list1 == null || list2 == null) return list1 || list2;
    while (current1 !== null && current2 !== null) {
        if (current1.val <= current2.val) {
            newCurrent.next = new ListNode(current1.val); 
            current1 = current1.next;
        }
            else {
                newCurrent.next = new ListNode(current2.val);
                current2 = current2.next;
                } 
        newCurrent = newCurrent.next;
        }
    newCurrent.next = current1 || current2;
    return newList.next;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let createLists = function () {
    let list1 = new ListNode(1);
    list1.next = new ListNode(2);
    list1.next.next = new ListNode(4);

    let list2 = new ListNode(1);
    list2.next = new ListNode(3);
    list2.next.next = new ListNode(4);
    return [list1, list2]
}

let list1 = createLists()[0];
let list2 = createLists()[1];

mergeTwoLists (list1, list2);