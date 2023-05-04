class APIService {
    visit = async (course_id, block_id) => {
        const url = "/os-api/v1/courses/course/" + course_id + "/block/" + block_id + "/visit"
        console.log('url', url)
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
    };
}
export default APIService;
