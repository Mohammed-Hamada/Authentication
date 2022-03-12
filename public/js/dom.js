const fetchOptions = ({ method, data }) => ({
  headers: {
    'Content-Type': 'application/json',
  },
  body: data,
  method,
});
