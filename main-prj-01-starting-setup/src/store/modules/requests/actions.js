export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    }

    const response = await fetch(`https://vue-http-demo-df3df-default-rtdb.firebaseio.com/request/${payload.coachId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });

    const responseData = await response.json();

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;

    if(!response.ok) {
      // error
      const error = new Error(responseData.message || 'Failed to send request!');
      throw error;
    }

    context.commit('addRequest', newRequest)
  }
};
