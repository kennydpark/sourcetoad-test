var arr = [
  {
    'guest_type': 'crew',
    'first_name': 'Marco',
    'last_name': 'Burns',
    'guest_booking': {
        'room_no': 'A0073',
        'some_array': [7,2,4]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'John',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'guest_booking': {
        'room_no': 'C73',
        'some_array': [1,3,5,2,4,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'crew',
    'first_name': 'Jack',
    'last_name': 'Daniels',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Alan',
    'last_name': 'Turing',
    'guest_booking': {
        'room_no': 'B15',
        'some_array': [2,5,6,3]
    },
  },
];

function mutateArray(a) {
  for (let i = 0; i < a.length; i++) {
    Object.keys(a[i]).forEach((key) => {
      if (typeof a[i][key] === 'object' && a[i][key] !== null) {
        Object.assign(a[i], a[i][key])
        delete a[i][key]
        a[i]['some_total'] = a[i]['some_array'].reduce((add, n) => add + n, 0)
        delete a[i]['some_array'];
      }
    })
  }
  a = a.filter(x => x['guest_type'] !== 'crew');
  function Compare(x, y) {
    if (x['last_name'] < y['last_name']) {
      return -1;
    } else if (x['last_name'] > y['last_name']) {
      return 1;
    } else if (x['last_name'] === y['last_name']) {
      if (x['first_name'] < y['first_name']) {
        return -1
      } else if (x['first_name'] > y['first_name']) {
        return 1;
      } else {
        return 0;
      }
    }
    return 0;
  }
  a.sort(Compare);
  return a;
}

$(document).ready(function() {
    $('#originalArray').html(JSON.stringify(arr, null, 2));
    $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});
