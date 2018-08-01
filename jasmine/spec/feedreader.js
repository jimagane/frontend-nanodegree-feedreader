/* feedreader.js starter code provided by Udacity
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has URL', function() {
            for (i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        it('has name', function() {
            for (i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {
        var menu = document.querySelector('body');
        var icon = document.querySelector('.menu-icon-link');

        it('is hidden by default', function() {
            expect(menu.classList).toContain('menu-hidden');
        });

        it('changes visibility', function() {
            icon.click();
            expect(menu.classList).not.toContain('menu-hidden');
            icon.click();
            expect(menu.classList).toContain('menu-hidden');
        });
    });

    describe('Initial Entries', function() {
        var feed = document.querySelector('.feed');
        var articles = feed.children;

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('successfully loads entry', function(done) {
            var entry = articles[0].children;

            expect(articles.length).not.toBe(0);
            expect(entry[0].classList).toContain('entry');
            done();
        });
    });

    describe('New Feed Selection', function() {
        var feed = document.querySelector('.feed');
        var feedA = [];

        beforeEach(function(done) {
            loadFeed(0);
            feedA.push(feed.innerText);
            loadFeed(1, done);
        });

        it('changes content', function(done) {
            var feedB = [];
            feedB.push(feed.innerText);
            expect(feedA).not.toMatch(feedB);
            done();
        });
    });
}());
