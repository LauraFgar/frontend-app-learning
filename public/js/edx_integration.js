(async () => {
"use strict";
    const path = window.location.pathname;
    const parts = path.split("/");
    const blockId = parts[parts.length - 1];
    graspway_rating_init(blockId);

    /**
     * User Activity
     */
    function graspway_rating_init( block_id ) {
    console.log('entra', block_id)
    if (!block_id) { return ;}
    const course_id = 'course-v1:' + block_id.match(/(^block\-v1\:)(.*)\+type\@(.*)(@)(.*)/i)[2];
    const url = "/api/v1/courses/course/" + course_id + "/block/" + block_id + "/visit"

    fetch(url)
    .then(response => {
        console.log('response1', response)
        if (!response.ok) {
            throw new Error('Network response was not success.');
        }
    })
    .then(data => {
        console.log('data', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    }
})();
