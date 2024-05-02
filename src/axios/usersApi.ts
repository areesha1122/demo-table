import axios from 'axios';
// This function is responsible to get user data with filters from api.
export const fetchUsersData = async (
    pageSize: number,
    currentPage: number,
    sorting: string | null
) => {
    const usersData = await axios.get(
        `https://main--stellular-sunburst-d2e72b.netlify.app/api/users?pageSize=${pageSize}&currentPage=${currentPage}${
            sorting ? `&sorting=${sorting}` : ''
        }`
    );
    return usersData.data;
};
