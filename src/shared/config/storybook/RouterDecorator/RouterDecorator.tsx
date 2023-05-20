import { DecoratorFn, Story } from '@storybook/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

// '/article/2', '/article/:id'
export const RouterDecorator =
    (path?: string, pathSchema?: string): DecoratorFn =>
    (StoryComponent: Story) => {
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
