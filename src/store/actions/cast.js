import ActionTypes from '../utils/ActionTypes';

const castDeatils = {
    title: 'Brad Pitt',
    genre: 'American actor',
    description: 'William Bradley Pitt is an American actor and film producer. He has received multiple awards and nominations including an Academy Award as producer under his own company Plan B Entertainment.',
    born: 'December 18, 1963',
    height: '1.8 m',
    netWorth: '$240 million',
    gallery: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwVwWzgc9AkyOdjHZj6jYQkW-FTDYOaPXQPrO0TE4HeBo8xsTd4Q',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ojT3_bJaKO1utViagsNiCIMSwYKpxfrIXPUuEBBe9LOtPh3J',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEXzSMGVqUsz0AptK2sU9K4Z6gvvDAQIlCLeNVB1lswoy_FXe3w',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gqmP99FGor00xyImSTljCgwK1WjWfSYYs7xK6007m8TjPCrjIw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyhS_rX3jxID6sCQRbPcz2aJdfBWt_FUvJ4G9daouGgSeaoNscQ',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflCowiv2XmM7LXJIIKOI8kD6dtXUIJnJHwD-3jDEYTw-atork6A',
    ]
};

export const fetchCastFromAPI = (actorName) => {
  // actorName can be used for API call
  return(dispatch) => {
    dispatch(getCast());
    setTimeout(() => dispatch(getCastSuccess(castDeatils)), 3000);
  }
}

function getCast() {
  return {
    type: ActionTypes.FETCH_CAST
  }
}

function getCastSuccess(data) {
  return {
    type: ActionTypes.FETCH_CAST_SUCCESS,
    data
  }
}