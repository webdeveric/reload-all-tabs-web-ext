import {
  browser, Tabs, Manifest,
} from 'webextension-polyfill-ts';

function logManifestDetails( { name, version, author, homepage_url }: Manifest.ManifestBase ) : void
{
  console.groupCollapsed( name );
  console.log(`Version: ${version}`);
  console.log(`Author: ${author}`);
  console.log(`Homepage: ${homepage_url}`);
  console.groupEnd();
}

function getCurrentWindowTabs(): Promise<Tabs.Tab[]>
{
  // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query#Parameters
  return browser.tabs.query({
    currentWindow: true,
    hidden: false,
    windowType: 'normal',
  });
}

function reloadTab( tab: Tabs.Tab ) : void
{
  browser.tabs.reload(tab.id, { bypassCache: true });
}

async function reloadAllTabs() : Promise<void>
{
  const tabs: Tabs.Tab[] = await getCurrentWindowTabs();

  tabs.forEach( tab => reloadTab( tab ) );
}

browser.browserAction.onClicked.addListener( reloadAllTabs );

logManifestDetails( browser.runtime.getManifest() );
