import browser, { Manifest, Tabs } from 'webextension-polyfill';

function logManifestDetails({
  name,
  version,
  author,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  homepage_url,
}: Manifest.ManifestBase): void {
  console.groupCollapsed(name);
  console.log(`Version: ${version}`);
  console.log(`Author: ${author}`);
  console.log(`Homepage: ${homepage_url}`);
  console.groupEnd();
}

/**
 * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query#Parameters
 */
async function getCurrentWindowTabs(): Promise<Tabs.Tab[]> {
  try {
    return await browser.tabs.query({
      currentWindow: true,
      hidden: false,
      windowType: 'normal',
    });
  } catch {
    return await browser.tabs.query({
      currentWindow: true,
      windowType: 'normal',
    });
  }
}

function reloadTab(tab: Tabs.Tab): void {
  browser.tabs.reload(tab.id, { bypassCache: true });
}

async function reloadAllTabs(): Promise<void> {
  const tabs: Tabs.Tab[] = await getCurrentWindowTabs();

  tabs.forEach(tab => reloadTab(tab));
}

browser.browserAction.onClicked.addListener(reloadAllTabs);

logManifestDetails(browser.runtime.getManifest());
