class APIService {
    visit = async (course_id, block_id) => {
        const URL = "/api/v1/courses/course/" + course_id + "/block/" + block_id + "/visit"
        fetch( process.env.BASE_URL_EDX + URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not success.');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });        
    };
}
export default APIService;
