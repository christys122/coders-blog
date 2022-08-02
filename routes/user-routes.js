router.put('/:id', (req, res) => {
    // expects {username: '', email: '', password: ''}
  
    // pass in req.body instead to only update what's passed through
    User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id
      }
    });
  