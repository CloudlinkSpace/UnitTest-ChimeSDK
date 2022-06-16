import AddModerator from '../component6';

test('test component 4 ', ()=>{

    const create = jest.fn();
    create('PRIVATE', 'user');
    expect(create).toBeTruthy();
    expect(create).toHaveBeenCalledTimes(1);
    expect(create).toHaveBeenCalled();
    expect(create).toHaveBeenLastCalledWith('PRIVATE', 'user');
})
