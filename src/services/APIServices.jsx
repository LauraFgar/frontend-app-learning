import Cookies from 'js-cookie';
import { getConfig } from '@edx/frontend-platform';
class APIService {
    visit = async (course_id, block_id) => {
        const URL = `/api/v1/courses/course/${course_id}/block/${block_id}/visit`;
        const lmsSessionIdCookie = Cookies.get('lms_sessionid');
        console.log('COOKIESSS', lmsSessionIdCookie)
        try {
            const response = await fetch(getConfig().API_GW_URL + URL, {
                method: 'GET',
                headers: {
                    'Cookie': `lms_sessionid=${lmsSessionIdCookie}`,
                },
            });

            console.log('response', response);

            if (!response.ok) {
                throw new Error('Network response was not success.');
            }

        } catch (error) {
            console.error('Hubo un problema con la operación de fetch:', error);
        }
    };
}
export default APIService;
