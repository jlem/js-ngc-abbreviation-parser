import parser from '../src/parser';

describe('Parser', () => {
    describe('getDescriptors()', () => {
        it('should split a description string into its constituent descriptors', () => {
            const description = 'aa;bb;c';
            const DELIMITER = ';';
            const expectedDescriptors = ['aa', 'bb', 'c'];

            expect(parser.getDescriptors(description, DELIMITER)).toEqual(expectedDescriptors);
        });
    });

    describe('getTokens()', () => {
        describe('example 1', () => {
            it('should identitify all tokens', () => {
                const TOKEN_SET = ['e', 'ee', 'F'];
                const descriptor = 'eeF';
                const expectedTokens = ['ee', 'F'];
                let tracker = [];

                expect(parser.getTokens(descriptor, TOKEN_SET, tracker)).toEqual(expectedTokens);
            });
        });
    });
});