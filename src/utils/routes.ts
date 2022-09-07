const ROUTES = {
    deleteMeetup: (meetupId: number) => `delete/${meetupId}`,
    editMeetup: (meetupId: number) => `edit/${meetupId}`,
    viewMeetup: (meetupId: number) => `details/${meetupId}`,
    newMeetup: {
        path: '/new-meetup',
    },
    fetchMeetup: {
        path: '/get/:id',
    },
    allMeetups: {
        path: '/',
    },
};

export default ROUTES;