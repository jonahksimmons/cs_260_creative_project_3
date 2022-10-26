import React from "react";
  
const Recommendations = () => {
	return (
	<div>
		<h1 class="summary">Recommendations</h1>
		<p class="summary">
			The BORING has compiled the list of recommendations and links to some guides in the following TOML document: 
		</p>
		<div class="toml">
			<code class="key">title</code> = <code class="value">"recommendations"</code><br/>
			<br/>
			<code class="section">[software]<br/></code>
			<code class="key">core_utils</code> = <code class="value">"https://github.com/uutils/coreutils"</code><br/>
			<code class="key">text_editor</code> = <code class="value">"https://neovim.io/"</code><br/>
			<code class="key">system_shell</code> = <code class="value">"http://gondor.apana.org.au/~herbert/dash/"</code><br/>
			<code class="key">browser</code> = <code class="value">"https://qutebrowser.org/"</code><br/>
			<code class="key">terminal_emulator</code> = <code class="value">"https://alacritty.org/"</code><br/>
			<code class="key">terminal_multiplexer</code> = <code class="value">"https://github.com/tmux/tmux"</code><br/>
			<code class="key">operating_systems</code> = [<code class="value">"Arch Linux", "Gentoo Linux", "Redox OS"</code>]<br/>
			<br/>
			<code class="section">[languages]</code><br/>
			<code class="key">spoken</code> = <code class="value">"Esperanto"</code><br/>
			<code class="key">programming</code> = [<code class="value">"Rust", "Go", "Kotlin", "Ruby"</code>]<br/>
			<br/>
			<code class="section">[misc]</code><br/>
			<code class="key">time_system</code> = <code class="value">"Decimal"</code><br/>
			<code class="key">measurement_system</code> = <code class="value">"Metric"</code><br/>
			<code class="key">tempurature_system</code> = <code class="value">"Celcius"</code><br/>
			<code class="key">games</code> = [<code class="value">"Minetest"</code>]<br/>
		<code class="key">currencies</code> = [<code class="value">"Monero", "Wownero"</code>]<br/>
		</div>
		<br/>
                <p class="footer">
                        <a href="https://github.com/jonahksimmons/cs_260_creative_project_3">Link to github repo</a>
                </p>
                <br/>

	</div>
	);
};
  
export default Recommendations;
