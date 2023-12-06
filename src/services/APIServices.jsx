import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';

class APIService {
    visit = async (course_id, block_id) => {
        const { userId } = getAuthenticatedUser();
        const URL = `/api/v1/courses/user/${userId}/course/${course_id}/block/${block_id}/visit`;

        console.log('USER_ID', userId)
        try {

            const response = await fetch(getConfig().API_GW_URL + URL, {
                method: 'GET'
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
