export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    }

    const response = await fetch(`https://vue-http-demo-df3df-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData),
    });

    // const reponseData = await response.json();

    if(!response.ok) {
      // error
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://vue-http-demo-df3df-default-rtdb.firebaseio.com/coaches.json`
    );

    const reponseData = await response.json();

    if(!response.ok) {
      // error
    }

    const coaches = [];

    for (const key in reponseData) {
      const coach = {
        id: key,
        firstName: reponseData[key].firstName,
        lastName: reponseData[key].lastName,
        description: reponseData[key].description,
        hourlyRate: reponseData[key].hourlyRate,
        areas: reponseData[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches)
  }
};
