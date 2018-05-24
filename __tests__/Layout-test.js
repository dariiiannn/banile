import React from "react";
import { shallow } from "enzyme";
import Layout from "../src/js/components/Layout";

describe( "Layout suite", () => {
    it( "should render one <Layout /> component", () => {
        const wrapper = shallow( <Layout /> );
        expect( wrapper.length ).toBe( 1 );
    } );
} );
