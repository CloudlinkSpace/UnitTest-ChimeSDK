import channelsCheck from '../component2';

test('test component 2 ', ()=>{

    const test1 = jest.fn();
    test1();
    expect(test1).toBeTruthy();
    expect(test1).toHaveBeenCalledTimes(1);
    expect(test1).toHaveBeenCalled();
})
