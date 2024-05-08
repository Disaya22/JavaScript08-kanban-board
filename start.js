(()=>{

    let draggingElem;

    function onDragStart(){
        draggingElem = this;
        //console.log(this);
    }

    function onDrop(){
        //console.log('drop')
        this.append(draggingElem);
        draggingElem = null;
    }

    function onDragOver(event){
        event.preventDefault();
    }

    function onDragEnter(event){
        event.preventDefault();
    }

    function run(){
        const taskElems = Array.from(document.querySelectorAll('.task'));
        const dropZoneElems = Array.from(document.querySelectorAll('.drop-zone'));
        //console.log(taskElems);

        taskElems.forEach((taskElem) => {
            taskElem.addEventListener('dragstart', onDragStart);
        });

        dropZoneElems.forEach((dropZoneElem) => {
            dropZoneElem.addEventListener('drop', onDrop);
            dropZoneElem.addEventListener('dragover', onDragOver);
            dropZoneElem.addEventListener('dragenter', onDragEnter);


        })
    }
    run();

})();