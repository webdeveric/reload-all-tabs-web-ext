import { browser, Tabs } from 'webextension-polyfill-ts';

function getCurrentWindowTabs(): Promise<Tabs.Tab[]>
{
  // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query#Parameters
  return browser.tabs.query({
    currentWindow: true,
    hidden: false,
    windowType: 'normal',
  });
}

function reloadTab( tab: Tabs.Tab )
{
  browser.tabs.reload(tab.id, { bypassCache: true });
}

async function reloadAllTabs()
{
  const tabs: Tabs.Tab[] = await getCurrentWindowTabs();

  tabs.forEach( tab => reloadTab( tab ) );
}

browser.browserAction.onClicked.addListener( reloadAllTabs );
