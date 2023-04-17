import { DecoratorFn, Story } from '@storybook/react';
import {
    BrowserRouter, MemoryRouter, Route, Routes,
} from 'react-router-dom';

// '/articles/2', '/articles/:id'
export const RouterDecorator = (path?: string, pathSchema?: string): DecoratorFn => (StoryComponent: Story) => {
    if (!path) {
        return (
            <BrowserRouter>
                <StoryComponent />
            </BrowserRouter>
        );
    }

    return (
        <MemoryRouter initialEntries={[path]}>
            <Routes>
                <Route
                    path={pathSchema || path}
                    element={<StoryComponent />}
                />
            </Routes>
        </MemoryRouter>
    );
};
