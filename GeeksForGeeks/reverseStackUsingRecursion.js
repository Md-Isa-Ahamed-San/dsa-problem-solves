class Solution {
    reverse(st) {
        // Base case: If stack is empty, return.
        if (st.length === 0) {
            return;
        }

        // Remove the top element from the stack
        let top = st.pop();

        // Reverse the remaining stack
        this.reverse(st);

        // Insert the top element back at the bottom
        this.insertAtBottom(st, top);
    }

insertAtBottom(st,item){
    if(st.length===0){
        st.push(item)
        return ;
    }
    let poppedItem = st.pop();
    this.insertAtBottom(st,item);
    st.push(poppedItem)
   
}
}