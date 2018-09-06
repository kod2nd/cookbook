import { shallowRender } from "./helper/testHelper";
import Header from '../component/Header'

it('Snapshot test', () => {
    const result = shallowRender(Header)
    expect(result).toMatchSnapshot()
});